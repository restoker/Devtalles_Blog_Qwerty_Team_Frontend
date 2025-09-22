'use server';

export const getBlogAction = async (id: string) => {

    try {
        const url = process.env.ADDRESS_SERVER;

        const response = await fetch(`${url}/api/posts/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (!response.ok) {
            return {
                ok: false,
                msg: 'Error when getting blog',
            }
        }

        return {
            ok: true,
            data: data.data,
            msg: 'Blog got successfully',
        }
    } catch (e) {
        return {
            ok: false,
            msg: 'Error on Server when getting blog',
        }
    }
}
