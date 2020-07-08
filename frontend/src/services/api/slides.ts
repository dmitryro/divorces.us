import client from 'services/client'

export default {
    async getSlides(data: object): Promise<any> {
         var slides = await client.all('slides');
         return slides;
    }
}
