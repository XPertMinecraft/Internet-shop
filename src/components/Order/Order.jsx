import './Order.css';
import { useState, useEffect } from "react";

export default function Order() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const handleOrder = () => {
        alert("Замовлення оформлено!");
    };

    const [cities, setCities] = useState([]);
    const [city, setCity] = useState();
    const [deps, setDeps] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetch("https://api.novaposhta.ua/v2.0/json/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                apiKey: "5543d3f63a80cde63ab5f229ba09dbda",
                modelName: "Address",
                calledMethod: "getCities",
                methodProperties: {
                    FindByString: search,
                }
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCities(data.data);
            });
    }, [search]);

    useEffect(() => {
        if (city) {
            fetch("https://api.novaposhta.ua/v2.0/json/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    apiKey: "5543d3f63a80cde63ab5f229ba09dbda",
                    modelName: "Address",
                    calledMethod: "getWarehouses",
                    methodProperties: {
                        CityRef: city
                    }
                })
            })
                .then(res => res.json())
                .then(data => {
                    const descriptions = data.data.map(item => item.Description);
                    setDeps(descriptions);
                });
        }
    }, [city]);

    return (
        <>

            
            <h2>Оформлення замовлення</h2>
            <p>Вашк місто: {city}</p>


            <input
                placeholder="Введіть місто"
                onChange={(e) => setSearch(e.target.value)}
            />

            <select onInput={(e) => setCity(e.target.value)}>
                {cities.map(el => {
                    return (
                        <option value={el.Ref}>{el.Description}</option>
                    )
                })}
            </select>

            <select onChange={(e) => setCity(e.target.value)}>
                {deps.map(el => {
                    return (
                        <option value={el}>{el}</option>
                    )
                })}
            </select>

            <input placeholder="Ваше ім'я" value={name} onChange={e => setName(e.target.value)} />
            <br />

            <input placeholder="Телефон" value={phone} onChange={e => setPhone(e.target.value)} />
            <br />

            <button onClick={handleOrder}>
                Оформити замовлення
            </button>

        </>
    )
}