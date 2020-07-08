import { observable, action, runInAction } from 'mobx'

import { StoreExt } from 'utils/reactExt'

export class ServicesStore extends StoreExt {
    /**
     * @memberof ServicesStore
     */


    @observable
    toggledClearRows = false

    @observable
    component = undefined

    @observable
    adoption: IServicesStore.IService = this.readAdoption() 

    @observable
    agreements: IServicesStore.IService = this.readAgreements()

    @observable
    contested: IServicesStore.IService = this.readContested()

    @observable
    forceUpdate = undefined

    @observable
    getServicesloading = false

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
     * @type {IServicesStore.IPost[]}
     * @memberof ServicesStore
     */
    @observable
    services: IServicesStore.IService[] = this.getServices();
    /**
     * table pageIndex
     *
     * @memberof ServicesStore
     */
    @observable
    pageIndex = 1

    /**
     * table pageSize
     *
     * @memberof ServicesStore
     */
    @observable
    pageSize = 30
    /**
     * services total
     *
     * @memberof ServicesStore
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
     *
     * @memberof ServicesStore
     */
    @action
    getServices = async () => {
        this.getServicesloading = true
        try {
             var res = await this.api.blog.getServices({ pageIndex: this.pageIndex, pageSize: this.pageSize  });
              
             runInAction('SET_SERVICE_LIST', () => {
                this.services = res.data
                this.total = this.services.length
            })

        } catch (err) {
            console.log("Failed fetching services ..."+err);
        }
        runInAction('HIDE_SERVICE_LIST_LOADING', () => {
            this.getServicesloading = false
        })
        return this.services;
    }


    @action
    getService = async (id:number) => {
        this.getServicesloading = true
        let service = null;
        try {
             var res = await this.api.services.getService(id);
             service = res.data;
             runInAction('SET_SERVICE_LIST', () => {
             })
        } catch (err) {
            console.log("Failed fetching services ..."+err);
        }
        runInAction('HIDE_SERVICE_LIST_LOADING', () => {
            this.getServicesloading = false
        })
        return service;
    }


    @action
    pushPost = async(id: number) => {   
         if(!this.selected.includes(id)) {
             this.selected.push(id);
         }
    }
    @action
    setServices = async(services: Array) => {
         this.services = services;
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
    popFromServices = async(id: number) => {
        for(var i=0; i<this.services.length;i++) {
            if(eval(this.services[i].id)===id) {
                this.services.splice(i, 1);
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
    refreshServices = async() => {
        if (this.services.length > 0) {
            for(var i=0; i<this.services.length; i++) {
                if (this.deleted.includes(this.services[i].id)) {
                    this.services.splice(i, 1);
                }
            }
        }
    }

    createPost = async (log: IServicesStore.IPost) => {
        var res = await this.api.log.createPost(log)  
        runInAction('SET_SERVICE_LIST', () => {
                             this.services = res.data
                             this.total = 2
                         
        });
    }

    modifyPost = async (log: IServicesStore.IPost) => {
        await this.api.log.modifyPost(log)
    }

    deletePost = async (id) => {
        var res = await this.api.log.deletePost(id)
        this.getServices();
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
        this.getServices()
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
        this.getServices()
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
    readAdoption = async () => {
        this.adoption = await this.getService(1);
        return this.adoption;
    }

    @action
    readAgreements = async () => {
        this.agreements = await this.getService(2);
        return this.agreements;
    }

    @action
    readContested = async () => {
        this.contested = await this.getService(3);
        return this.contested;
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

}

export default new ServicesStore()
