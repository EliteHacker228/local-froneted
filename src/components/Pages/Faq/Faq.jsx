import css from './Faq.module.css';
import file_ico from './file-ico.svg';
import globe_ico from './glode-ico.svg';
import {NavLink} from "react-router-dom";
import back_arrow from "../Faq/back_arrow.svg";
import React from "react";


const Faq = () => {

    return (
        <div>

            <NavLink className={css.back_arrow_link} to='/'>
                <img src={back_arrow} title="На главную"/>
            </NavLink>

            <div className={css.introduction}>
                <h1>Ответы на часто задаваемые вопросы</h1>
                <p>Мы думаем, что они также могут быть полезны для вас</p>
            </div>

            <div className={css.questions}>
                <div className={css.question}>
                    <h2><img src={file_ico}/> Вы сохраняете копию моих обработанных файлов?</h2>
                    <p><b>Нет.</b> Ваши файлы - только ваша собственность. Пока ваши файлы находятся на наших серверах,
                        они
                        строго
                        защищены, и никто не может получить к ним доступ. Мы храним файлы на протяжении 2 часов, чтобы
                        вы
                        могли
                        их скачать. Сразу после этого они навсегда удаляются с наших серверов. Мы не будем проверять,
                        копировать
                        или анализировать ваши файлы.</p>
                </div>
                <div className={css.question}>
                    <h2><img src={globe_ico}/> Каковы системные требования?</h2>
                    <p>У нас есть <b>основные системные требования.</b> Для бесперебойной работы нашего сервиса мы
                        рекомендуем
                        вам
                        работать со следующими браузерами: Chrome, Firefox и Safari. </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;