import client from 'services/client'

export default {
    async getPosts(data: object): Promise<any> {
         var posts = await client.all('posts');
         return posts;
    },

    createUser(data: object): Promise<any> {
        var posts = client.post('posts', data || {});
        return posts;
    },

    modifyUser(data: object): Promise<any> {
        var posts = [];
        return posts;
    },

    deleteUser(id: number): Promise<any> {
        var posts = client.delete('posts', id);
        return posts;
    }
}
