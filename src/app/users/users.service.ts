import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    async getUser(): Promise<Array<Object>> {
        const resp = await this.http.get(`${this.apiUrl}/user`).toPromise();
        const user = resp.json();
        return user || [];
    }

    async getUserById(userID): Promise<Object> {
        const resp = await this.http.get(`${this.apiUrl}/user/id/${userID}`).toPromise();
        const user = resp.json();
        return user || [];
    }

    async addUser(user): Promise<Object> {
        const resp = await this.http.post(`${this.apiUrl}/user`, user).toPromise();
        const newUser = resp.json();
        return newUser || null;
    }

    async deleteUser(UserID): Promise<Object> {
        const resp = await this.http.delete(`${this.apiUrl}/user/id/${UserID}`).toPromise();
        const status = resp.json();
        return status;
    }

    async updateUser(UserID, user): Promise<Object> {
        const resp = await this.http.put(`${this.apiUrl}/user/id/${UserID}`, user).toPromise();
        const updatedUser = resp.json();
        return updatedUser;
    }

}
