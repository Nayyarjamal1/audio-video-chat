import { Component, OnInit, AfterViewInit} from '@angular/core';

declare var SIP: any;

@Component({
  selector: 'app-call',
  templateUrl: './call.html',
  styleUrls: ['./call.css']
})
export class CallComponent implements OnInit, AfterViewInit {

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
    var startButton = document.getElementById('startCall');
    startButton.addEventListener("click", function () {
      session = userAgent.invite('sip:1001@139.59.17.63', options);
      alert("Call Started");
    }, false);
    var userAgent = new SIP.UA({
      uri: '1000@139.59.17.63',
      wsServers: ['ws://139.59.17.63:5066'],
      authorizationUser: '1000',
      password: '1234'
    });
    var options = {
      media: {
        constraints: {
          audio: true,
          video: true
        },
        render: {
          remote: document.getElementById('remoteVideo'),
          local: document.getElementById('localVideo')
        }
      }
    };
  }
}
