import { observable, action, runInAction } from 'mobx'

import { StoreExt } from 'utils/reactExt'

export class BlogStore extends StoreExt {
    /**
     * @memberof BlogStore
     */

    @observable
    toggledClearRows = false

    @observable
    component = undefined

    @observable
    forceUpdate = undefined

    @observable
    getPostsloading = false

    @observable
    selectedRows = []

    @observable
    selected: number[] = []

    @observable
    deleted: number[] = []


    @observable
    data = []

    /**
     *
     * @type {IBlogStore.IPost[]}
     * @memberof BlogStore
     */
    @observable
    posts: IBlogStore.IPost[] = this.readPosts();
    /**
     * table pageIndex
     *
     * @memberof BlogStore
     */
    @observable
    pageIndex = 1


    /**
     * table pageSize
     *
     * @memberof BlogStore
     */
    @observable
    pageSize = 30
    /**
     * posts total
     *
     * @memberof BlogStore
     */
    @observable
    total = 0

    @action
    setSelectedRows = async (selectedRows) => {
        this.selectedRows = selectedRows;
    }

    @action
    setToggledClearRows = (toggledClearRows)=> {
        this.toggledClearRows = toggledClearRows;
    }


    @action
    getToggledClearRows = ()=> {
        return this.toggledClearRows;
    }
    /**
     * 加载用户列表
     *
     * @memberof BlogStore
     */
    @action
    getPosts = async () => {
        this.getPostsloading = true
        try {
             var res = await this.api.blog.getPosts({ pageIndex: this.pageIndex, pageSize: this.pageSize  });
              
             runInAction('SET_BLOG_LIST', () => {
                this.posts = res.data
                this.total = this.posts.length
            })

        } catch (err) {
            console.log("Failed fetching posts ..."+err);
        }
        runInAction('HIDE_BLOG_LIST_LOADING', () => {
            this.getPostsloading = false
        })
        return this.posts;
    }

    @action
    pushPost = async(id: number) => {   
         if(!this.selected.includes(id)) {
             this.selected.push(id);
         }
    }
    @action
    setPosts = async(posts: Array) => {
         this.posts = posts;
    }

    @action
    pushDeleted = async(id: number) => {
         if(!this.deleted.includes(id)) {
             this.deleted.push(id);
         }
    }

    @action
    popFromDeleted = async(id: number) => {
       if(this.deleted.includes(id)) {
           const index = this.deleted.indexOf(id);
           if (index > -1) {
               this.deleted.splice(index, 1);
           }
       }
    }

    @action
    popFromPosts = async(id: number) => {
        for(var i=0; i<this.posts.length;i++) {
            if(eval(this.posts[i].id)===id) {
                this.posts.splice(i, 1);
            }
        }
    }

    @action
    popFromSelected = async(id: number) => {
         if(this.selected.includes(id)) {
             const index = this.selected.indexOf(id);
             if (index > -1) {
                  this.selected.splice(index, 1);
             }
         }
    }

    @action
    refreshPosts = async() => {
        if (this.posts.length > 0) {
            for(var i=0; i<this.posts.length; i++) {
                if (this.deleted.includes(this.posts[i].id)) {
                    this.posts.splice(i, 1);
                }
            }
        }
    }

    createPost = async (log: IBlogStore.IPost) => {
        var res = await this.api.log.createPost(log)  
        runInAction('SET_BLOG_LIST', () => {
                             this.posts = res.data
                             this.total = 2
                         
        });
    }

    modifyPost = async (log: IBlogStore.IPost) => {
        await this.api.log.modifyPost(log)
    }

    deletePost = async (id) => {
        var res = await this.api.log.deletePost(id)
        this.getPosts();
    }


    deleteSelected = async() => {
            var rows = this.selectedRows;
            if (rows) {
                for(var i=0; i<rows.length; i++) {
                    this.api.log.deletePost(rows[i].id);
                }
            }
            this.selectedRow = [];
    }

    @action
    changePageIndex = (pageIndex: number) => {
        this.pageIndex = pageIndex
        this.getPosts()
    }
 
    @action
    emptySelected = () => {
        this.selected = []
    }    

    @action
    emptyDeleted = () => {
        //this.deleted = []
    }

    @action
    changePageSize = (pageSize: number) => {
        this.pageSize = pageSize
        this.getPosts()
    }

    @action
    setData = (data) => {
        this.data = data
    }

    @action
    setTotal = (total: number) => {
        this.total = total
    }



    @action
    toggleUpdate = () => {
       console.log("Time to update ... ");
    }

    @action
    setForceUpdate = (forceUpdate) => {
       this.forceUpdate = forceUpdate
    }

    @action
    setComponent = (component) => {
       this.component = component
    }


    @action
    readPosts = async () => {
        this.posts = await this.getPosts();
        return this.posts;
    }

}

export default new BlogStore()
