import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CardCharacter from '../../Components/CardCharacter/CardCharacter'


const FilterPage = () => {
    const { gender } = useParams();
    const [arrayCaracteres, setArrayCaracteres] = useState([]);

    const fetchCharacters = async () => {
        try {
            const response = await fetch(`https://dragonball-api.com/api/characters?gender=${gender}`);
            const data = await response.json();
            setArrayCaracteres(data);
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, [gender]);

    return (
        <main>
            {arrayCaracteres.map((item) => (
                <Link to={`/details/${item.id}`} key={item.id}>
                    <CardCharacter items={item} />
                </Link>
            ))}
        </main>
    );
};

export default FilterPage;