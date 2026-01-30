import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { WalletService } from '../services/wallet.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
    selector: 'wallet',
    imports: [RouterLink],
    templateUrl: './wallet.component.html',
})


export class WalletComponent {

    walletServices = inject(WalletService);
    autServices = inject(AuthService);

    user = this.autServices.user;

    balanceResource = this.walletServices.balanceResource;
    historyResource = this.walletServices.historyResource;

    // datePipe = inject(DatePipe);

    // transformDate(date: string | Date): string {
    //     return this.datePipe.transform(date, 'dd MMM yyyy, h:mm a') || '';
    // }


}
