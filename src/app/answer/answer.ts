import { Component, OnInit, AfterViewInit} from '@angular/core';

declare var SIP: any;

@Component({
    selector: 'app-answer',
    templateUrl: './answer.html',
    styleUrls: ['./answer.css']
})
export class AnswerComponent implements OnInit, AfterViewInit {

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        var session;
        var endButton = document.getElementById('endCall');
        endButton.addEventListener("click", function () {
            session.bye();
            alert("Call Ended");
        }, false);
        var userAgent = new SIP.UA({
            uri: '1001@139.59.17.63',
            wsServers: ['ws://139.59.17.63:5066'],
            authorizationUser: '1001',
            password: 'sumit'
        });

        userAgent.on('invite', function (ciapalo) {
            session = ciapalo;
            session.accept({
                media: {
                    constraints: {
                        audio: true,
                        video: true
                    },
                    render: {
                        remote:
                        document.getElementById('remoteVideo'),
                        local:
                        document.getElementById('localVideo')
                    }
                }
            });
        });
    }
}
