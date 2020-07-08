import { observable, action, autorun, runInAction } from 'mobx'

import { StoreExt } from '../../utils/reactExt'

export class LayoutStore extends StoreExt {
    /**
     * @memberof SiteStore
     */
    @observable
    showSignupModal = false

    @observable
    isOpenOverlay = false

    @observable
    showLoginModal = false


    /**
     * @type {ISlideStore.ISlide[]}
     * @memberof SiteStore
     */

    @observable
    slides: ISlideStore.ISlide[] = []

//    @action
//    openOverlay = () => ({
//       this.isOpenOverlay = true;
//    });


//    @action
//    closeOverlay = () => ({
//       this.isOpenOverlay = false;
//    });

    /**
     *
     * @memberof ServicesStore
     */
    @action
    getSlides = async () => {
        try {
             var res = await this.api.slides.getSlides();
             runInAction('SET_SLIDES_LIST', () => {
                this.slides = res.data
             })

        } catch (err) {
            alert("AN ERROR "+err);
            console.log("Failed fetching services ..."+err);
        }
        runInAction('HIDE_SLIDES_LIST_LOADING', () => {
        })
        return this.slides;
    }

    /**
     * @memberof LayoutStore
     */
    @action
    setShowLoginModal = (show: boolean) => {
        this.showLoginModal = show;
    }

   /**
    * @memberof LayoutStore
    */  
    readLoginModal = () => {
        return this.showLoginModal;
    }

    /**
     * @memberof LayoutStore
     */    
    @action
    setShowSignupModal = (show: boolean) => {
        this.showSignupModal = show;
    }

    /**
     * @memberof LayoutStore
     */
    @action
    setIsOpenOverlay = (isOpenOverlay: boolean) => {
        this.isOpenOverlay = isOpenOverlay;
    }
 
    /**
     * @memberof LayoutStore
     */ 
    readSignupModal = () => {
        return this.showSignupModal;
    }

    /**
     * @memberof LayoutStore
     */
    @action
    openOverlay = () => {
        this.isOpenOverlay = true;
    }

    /**
     * @memberof LayoutStore
     */
    @action
    closeOverlay = () => {
        this.isOpenOverlay = false;
    }

    @action
    readSlides = async () => {
        this.slides = await this.getSlides();
        return this.slides;
    }
}

export default new LayoutStore()
