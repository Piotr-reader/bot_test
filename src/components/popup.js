import popupClose from "../images/close-popup.svg";
import logo from "../images/farba_logo_social.jpg";

const popupCreate = `<div class="popup_body">
<div class="popup_content">
  <button class="popup_close"><img src="${popupClose}" alt="picture"></button>
  <div class="popup_title">
      <div class="popup_text">
          <p class="popup_description">Вы уверены что хотите сбросить результат?</p>
          <div class="popup_gift">
              <img class="popup_img" src="${logo}" alt="picture">
              <div class="popup_data"></div>
          </div>
      </div>
      <div class="popup_reset_btn">
          <button class="form__button btn_reset" type="button">Сбросить</button>
          <button class="form__button btn_cancel" type="button">Отмена</button>
      </div>
  </div>
</div>
</div>`;

export default popupCreate;
