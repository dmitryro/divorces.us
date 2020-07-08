import client from 'services/client'

export default {
    async getServices(data: object): Promise<any> {
         var services = await client.all('services');
         return services;
    },

    async getService(id: number): Promise<any> {
         var service = await client.get('services', eval(id));
         return service;
    },

    createService(data: object): Promise<any> {
        var service = client.post('services', data || {});
        return services;
    },

    modifyService(data: object): Promise<any> {
        var services = [];
        return services;
    },

    deleteService(id: number): Promise<any> {
        var services = client.delete('services', id);
        return services;
    }
}
