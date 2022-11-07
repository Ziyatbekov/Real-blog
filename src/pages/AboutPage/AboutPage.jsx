import React from 'react';
import './about.css'

const AboutPage = () => {
    return (
        <div className='about-wrapper'>
            <h1>Реал Мадрид</h1>
            <h2>Основное</h2>
            <p className='main-descr'>
                 «Реа́л Мадри́д» — испанский профессиональный футбольный клуб из города Мадрид. Признан ФИФА лучшим футбольным клубом XX века. «Реал Мадрид» — один из трёх клубов, которые ни разу не покидали высший испанский дивизион, двумя другими являются «Барселона» и «Атлетик Бильбао». Является одним из самых титулованных клубов в испанском футболе. На его счету 67 национальных трофеев: рекордные 35 титулов чемпиона страны (Ла Лига), а также 19 Кубков Короля, 12 Суперкубков Испании и 1 Кубок Лиги. Является рекордсменом по количеству побед и голов в Лиге чемпионов (14 раз, единственная команда, выигрывавшая этот турнир — тогда ещё Кубок Европейских чемпионов — 5 раз подряд).
            </p>
            <hr />
            <h2>Состав</h2>
            <div className='team'>
                <p>Вр	Тибо Куртуа	1992</p>
                <p>Защ	Дани Карвахаль	1992</p>
                <p>Защ	Эдер Милитан	1998</p>
                <p>Защ	Давид Алаба	1992</p>
                <p>Защ	Хесус Вальехо	1997</p>
                <p>Защ	Начо Вице-капитан команды	1990</p>
                <p>Нап	Эден Азар	1991</p>
                <p>ПЗ	Тони Кроос	1990</p>
                <p>Нап	Карим Бензема Капитан команды	1987</p>
                <p>ПЗ	Лука Модрич Вице-капитан команды	1985</p>
                <p>Нап	Марко Асенсио	1996</p>
                <p>ПЗ	Эдуарду Камавинга	2002</p>
                <p>Вр	Андрей Лунин	1999</p>
                <p>ПЗ	Федерико Вальверде	1998</p>
                <p>Защ	Лукас Васкес	1991</p>
                <p>ПЗ	Орельен Чуамени	2000</p>
                <p>ПЗ	Дани Себальос	1996</p>
                <p>Нап	Винисиус Жуниор	2000</p>
                <p>Нап	Родриго	2001</p>
                <p>Защ	Антонио Рюдигер	1993</p>
                <p>Защ	Ферлан Менди	1995</p>
                <p>Нап	Мариано	1993</p>
            </div>
            <hr />
            <div className='about-pl'>
                <h3>Лучший игроки в истории клуба</h3>
                <div>
                    <div className='players'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Cristiano_Ronaldo%2C_2012.JPG/330px-Cristiano_Ronaldo%2C_2012.JPG" alt="" className='img-player' />
                        <h4>Криштиану Роналду</h4>
                        <p>Лучший игрок и бомбардир</p>
                    </div>
                    <div className='players'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Mcu_Alfredo_Di_Stefano.jpg" alt="" className='img-player' />
                        <h4>Альфедо Ди Стефано</h4>
                        <p>Обладатель супер Золотого мяча</p>
                    </div>
                    <div className='players'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Zidane_2015.jpg" alt="" className='img-player'/>
                        <h4>Зинедин Зидан</h4>
                        <p>Лучший игрок из первого Галактикос <br /> А также единственный тренер который зовоевал 3 подряд ЛЧ (с Реал Мадридом)</p>
                    </div>
                    <div className='players'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ra%C3%BAl_Aspire4Sport_Conference_2012.jpg/405px-Ra%C3%BAl_Aspire4Sport_Conference_2012.jpg" className='img-player' alt="" />
                        <h4>Рауль Гонсалес</h4>
                        <p>Капитан той самой Галактикос</p>
                    </div>
                    <div className='players'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/CasillasReal_cropped.jpg" className='img-player' alt="" />
                        <h4>Икер Касильяс</h4>
                        <p>Лучший вратарь в истории Реала</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default AboutPage;