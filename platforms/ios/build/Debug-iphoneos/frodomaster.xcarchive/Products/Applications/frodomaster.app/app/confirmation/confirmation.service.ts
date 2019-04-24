import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class MyregisterPostService {
    private serverUrl = "https://app-prov-01.callfrodo.com/provisioningServer/web/webservice/provisioningregister";

    constructor(private http: HttpClient) { }

    postData(data: any) {
        let options = this.createRequestOptions();
        return this.http.post(this.serverUrl,  data , { headers: options });
    }

    private createRequestOptions() {
        let headers = new HttpHeaders({
           // "Content-Type": "application/json",
            "Content-Type":"application/x-www-form-urlencoded; "
        });
        return headers;
    }
}