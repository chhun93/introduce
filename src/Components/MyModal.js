import { Component } from "react";
import emailjs from "emailjs-com";
import * as InfoEmailJs from "./InfoEmailJs";

import "../Styles/MyModal.css";

export default class MyModal extends Component {
  render() {
    function sendMail(e) {
      e.preventDefault();
      var serviceId = InfoEmailJs.emailServiceId.toString();
      serviceId = serviceId.substr(serviceId.indexOf("\"")+1);
      serviceId = serviceId.substr(0,serviceId.toString().indexOf("\""));

      var templateId = InfoEmailJs.emailTemplateId.toString();
      templateId = templateId.substr(templateId.indexOf("\"")+1);
      templateId = templateId.substr(0,templateId.toString().indexOf("\""));
      
      var userId = InfoEmailJs.emailUserId.toString();
      userId = userId.substr(userId.indexOf("\"")+1);
      userId = userId.substr(0,userId.toString().indexOf("\""));

      emailjs
        .sendForm(
          serviceId,
          templateId,
          e.target,
          userId
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    return (
      <div className="myModal">
        <div id="myModal-left">
          <div id="background-text">ABOUT</div>
          <div id="forground-text">
            <p id="forground-text-aboutMe">ABOUT ME</p>
            <p>
              안녕하세요, 이창훈입니다.
              <br />
              93년생이고 산업공학을 전공하였습니다.
              <br />
              호기심이 많고 공부하는 자체를 재미있어 하며 배운 것을 활용하는
              것을 좋아합니다.
              <br />
              <br />
              한때, 새로운 알고리즘 공부하는 것을 좋아하여 여러 대회에 참여하며
              문제 해결 능력을 길렀고, 소형 컴퓨터를 활용한 공모전에 참여하기도
              했습니다.
              <br />
              <br />
              그리고 지금은 웹 관련 기술에 호기심이 생겨 꾸준히 공부하는
              중입니다.
              <br />
              <br />
              저에게 관심이 생기신다면 연락 부탁드립니다.
              <br />
              <br />
              감사합니다.
            </p>
          </div>
        </div>
        <div id="myModal-right">
          <form onSubmit={sendMail}>
            <div className="group">
              <input type="text" required="required" name="name" />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Name</label>
            </div>
            <div className="group">
              <input type="text" required="required" name="email" />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Email</label>
            </div>
            <div className="group">
              <textarea
                type="textarea"
                rows="5"
                required="required"
                name="message"
              ></textarea>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Message</label>
            </div>
            <input
              className="btn btn-outline-warning"
              type="submit"
              value="SEND"
            />
          </form>
        </div>
      </div>
    );
  }
}
