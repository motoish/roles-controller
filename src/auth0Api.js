import axios from 'axios';

// Base URL for Auth0 Management API
const baseUrl = 'https://your-auth0-domain/api/v2';

// Use your Auth0 Management API token
const token = 'your-auth0-management-api-token';

const auth0Client = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
});

export const getUserRoles = async (userId: string) => {
    try {
        const response = await auth0Client.get(`/users/${userId}/roles`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user roles:', error);
        throw error;
    }
};

export const assignUserRoles = async (userId: string, roles: string[]) => {
    try {
        const response = await auth0Client.post(`/users/${userId}/roles`, {
            roles
        });
        return response.data;
    } catch (error) {
        console.error('Error assigning user roles:', error);
        throw error;
    }
};

export const removeUserRoles = async (userId: string, roles: string[]) => {
    try {
        const response = await auth0Client.delete(`/users/${userId}/roles`, {
            data: { roles }
        });
        return response.data;
    } catch (error) {
        console.error('Error removing user roles:', error);
        throw error;
    }
};
