import newYork from "../assets/new york.jpg";
import greece from "../assets/greece.jpg";
import hawaii from "../assets/hawaii.jpg";
import canada from "../assets/canada.jpg";
import machuPichu from "../assets/machu pichu.jpg";
import rome from "../assets/rome.jpg";

import men1 from "../assets/peoples/man2.jpg";
import men2 from "../assets/peoples/man3.jpg";
import women1 from "../assets/peoples/women1.jpg";
import women2 from "../assets/peoples/women3.jpg";

import atv from "../assets/feature/ATV.jpg";
import yacht from "../assets/feature/Yacht.jpg";
import scuba from "../assets/feature/Scuba.jpg";
import paragliding from "../assets/feature/Paragliding.jpg";
import horseRiding from "../assets/feature/Horseriding.jpg";

import blog1 from "../assets/blogs-thumb-1.jpg";
import blog2 from "../assets/blogs-thumb-2.jpg";
import blog3 from "../assets/blogs-thumb-3.jpg";

import scubaMask from '../assets/scuba.png';
import paraglidingIcon from '../assets/paragliding.png';
import cycling from '../assets/cycling.png';
import atvIcon from "../assets/atv.png";

const moreDestinations = [
    {
        "name": "New York",
        "image": newYork,
        "detail": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, facere harum placeat earum obcaecati error.",
        "star": "8.5"
    },
    {
        "name": "Greece",
        "image": greece,
        "detail": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, facere harum placeat earum obcaecati error.",
        "star": "8.9"
    },
    {
        "name": "Hawaii",
        "image": hawaii,
        "detail": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, facere harum placeat earum obcaecati error.",
        "star": "9"
    },
    {
        "name": "Canada",
        "image": canada,
        "detail": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, facere harum placeat earum obcaecati error.",
        "star": "9.5"
    },
    {
        "name": "Machu Pichu",
        "image": machuPichu,
        "detail": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, facere harum placeat earum obcaecati error.",
        "star": "9.5"
    },
    {
        "name": "Rome",
        "image": rome,
        "detail": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, facere harum placeat earum obcaecati error.",
        "star": "9.7"
    },
]

const reviews = [
    {
        "title": "Best  tour agency, excellent vacations",
        "detail": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore reiciendis quam suscipit quaerat illo numquam quasi dolore placeat sed! Ut.",
        "image": women1,
        "name": "Martha Smith",
        "profession": "Web Designer"
    },
    {
        "title": "Enjoyed my vacation, really a great agency",
        "detail": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore reiciendis quam suscipit quaerat illo numquam quasi dolore placeat sed! Ut.",
        "image": men1,
        "name": "Matt Cimion",
        "profession": "Architect"
    },
    {
        "title": "Wonderful tour agancy, loved my vacations",
        "detail": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore reiciendis quam suscipit quaerat illo numquam quasi dolore placeat sed! Ut.",
        "image": women2,
        "name": "Laura Jones",
        "profession": "Graphic Designer"
    },
    {
        "title": "Wonderful tour agency, loved my vacations",
        "detail": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore reiciendis quam suscipit quaerat illo numquam quasi dolore placeat sed! Ut.",
        "image": men2,
        "name": "Jim Thompson",
        "profession": "Senior Lawyer"
    }
]

const popular = [
    {
        "title": "ATV",
        "image": atv,
        "detail": "Where you will receive a safety briefing about how to operate your ATV and where friendly.",
        "rating": "8.8",
        "price": "$ 125"
    },
    {
        "title": "Yacht Excursion",
        "image": yacht,
        "detail": "Swim with manta rays and walk with Komodo dragons in the world-famous Komodo National Park.",
        "rating": "9.5",
        "price": "$ 450"
    },
    {
        "title": "Scuba Diving",
        "image": scuba,
        "detail": "We invite you dive the coastline first discovered by Columbus by Dressel Divers. You can’t help feeling shipwreck.",
        "rating": "9.2",
        "price": "$ 150"
    },
    {
        "title": "Paragliding",
        "image": paragliding,
        "detail": "Caribbean’s highest mountain ranges, tucked in the heart of the country, where you’ll find the lushest.",
        "rating": "8.5",
        "price": "$ 110"
    },
    {
        "title": "Horse Riding",
        "image": horseRiding,
        "detail": "Hop on a guided horseback ride around Constanza’s gorgeous valleys and villages. Routes offered include.",
        "rating": "9.5",
        "price": "$ 130"
    },
]

const blogs = [
    {
        "title": "The Best Helicopter Tours",
        "image": blog1,
        "detail": "We love to see you live an exciting, unique and unforgettable experience.",
        "date": "19 Jun"
    },
    {
        "title": "The Cruise Line Rankings",
        "image": blog2,
        "detail": "The group of highly trained certified personnel for each attraction.",
        "date": "12 Jun"
    },
    {
        "title": "Best Romantic Gateways",
        "image": blog3,
        "detail": "Your satisfaction with your experience that your recommendation.",
        "date": "15 Jun"
    },
]

const banner = [
    {
        "image": canada,
        "title": "escape life for a little while",
        "semi-title": "Find Your Passion"
    },
    {
        "image": greece,
        "title": "a more rewarding way to travel",
        "semi-title": "Find Your Passion"
    },
    {
        "image": hawaii,
        "title": "collecting memories every time",
        "semi-title": "be an adventurer"
    },
    {
        "image": rome,
        "title": "a real adventure is out there",
        "semi-title": "commit to travel"
    },
]

const features = [
    {
        "icon": scubaMask,
        "name": "Scuba Diving",
        "detail": "Adrenaline-pumping excursions for the experienced."
    },
    {
        "icon": paraglidingIcon,
        "name": "Paragliding",
        "detail": "Wild landscapes and rough rivers and you will rafting."
    },
    {
        "icon": atvIcon,
        "name": "ATV",
        "detail": "Start your engines and get ready for an adventure"
    },
    {
        "icon": cycling,
        "name": "Cycling",
        "detail": "Thrilling off-road experience public roads maximum security."
    },
]

export { moreDestinations, reviews, popular, blogs, banner, features };