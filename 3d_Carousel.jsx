import Rio from '../../Assets/Img/rio_de_janeiro.jpg';
import Moscow from '../../Assets/Img/Moscow.jpg';
import India from '../../Assets/Img/India_01.jpg';
import China from '../../Assets/Img/China.jpg';
import Rome from '../../Assets/Img/Rome-italy.jpeg';
import Egypt from '../../Assets/Img/egypt.jpg';

export default () => {
    return (
        <>
            <h1 className="fw-light" id="titulo">Book your Trip</h1>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="gallery">
                            <div class="gallery-container">
                                <img class="gallery-item gallery-item-1" src={Rio} data-index="1" />
                                <img class="gallery-item gallery-item-2" src={Moscow} data-index="2" />
                                <img class="gallery-item gallery-item-3" src={India} data-index="3" />
                                <img class="gallery-item gallery-item-4" src={China} data-index="4" />
                                <img class="gallery-item gallery-item-5" src={Rome} data-index="5" />
                                <img class="gallery-item gallery-item-5" src={Egypt} data-index="6" />
                            </div>
                            <div class="gallery-controls"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}