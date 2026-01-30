// core/services/wallet.service.ts
import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';

import { environment } from '../../environments/environment';


const baseUrl = environment.baseUrl;

@Injectable({ providedIn: 'root' })

export class WalletService {

    private http = inject(HttpClient);


    balanceResource = rxResource({
        stream: () => this.http.get<any>(`${baseUrl}/me/balance`)
    });

    historyResource = rxResource({
        stream: () => this.http.get<any[]>(`${baseUrl}/me/history`)
    });

    balance = computed(() => this.balanceResource.value()?.balance ?? 0);

    accountKey = computed(() => {
        const data = this.balanceResource.value();
        return data?.accountKey ?? '--- ---- ---'
    });


}
