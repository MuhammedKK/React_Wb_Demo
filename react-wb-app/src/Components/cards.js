import React from 'react';
import { CardsItem } from './cardItem';

export const Cards = () => {
    return (
        <>
            <div className="cards">
                <h1>Check It</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardsItem src="/images/img-1.jpg" path="/services" label="Perfect" alt="Travel" text="Card Text Here"/>
                            <CardsItem src="/images/img-2.jpg" path="/services" label="Perfect" alt="Travel" text="Card Text Here"/>
                            <CardsItem src="/images/img-3.jpg" path="/services" label="Perfect" alt="Travel" text="Card Text Here"/>
                            <CardsItem src="/images/img-4.jpg" path="/services" label="Perfect" alt="Travel" text="Card Text Here"/>
                            <CardsItem src="/images/img-5.jpg" path="/services" label="Perfect" alt="Travel" text="Card Text Here"/>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}