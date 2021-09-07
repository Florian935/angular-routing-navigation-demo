import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-compose-message',
    templateUrl: './compose-message.component.html',
    styleUrls: ['./compose-message.component.scss'],
})
export class ComposeMessageComponent {
    details = '';
    message = '';
    sending = false;

    constructor(private _router: Router) {}

    send() {
        this.sending = true;
        this.details = 'Sending Message...';

        setTimeout(() => {
            this.sending = false;
            this.closePopup();
        }, 1000);
    }

    cancel() {
        this.closePopup();
    }

    closePopup() {
        // Providing a `null` value to the named outlet
        // clears the contents of the named outlet
        this._router.navigate([{ outlets: { popup: null } }]);
    }
}
