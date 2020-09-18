import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import Filters from '../../components/Filters';
import PlatformCard from './PlatformCard';
import { GamePlatform, Game } from './types';

const links = ['/records'];
const linksText = ['VER TABELA'];

const BASE_URL = 'https://sds1-turco.herokuapp.com';

const mapSelectValues = (games: Game[]) => {
    return games.map(game => ({
        ...game,
        label: game.title,
        value: game.id
    }))
}

const CreateRecord = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [platform, setPlatform] = useState<GamePlatform>();
    const [selectedGame, setSelectedGame] = useState('');
    const [allGames, setAllGames] = useState<Game[]>([]);
    const [filteredGames, setFilteredGames] = useState<Game[]>([]);

    const handleChangePlatform = (selectedPlatform: GamePlatform) => {
        setPlatform(selectedPlatform);
        const gamesByPlatform = allGames.filter(
            game => game.platform === selectedPlatform
        )
        setFilteredGames(gamesByPlatform);
    }

    const handleChange = (value: any) => {
        setSelectedGame(value.target.value);
    }

    const handleSubmit = () => {
        const payload = {
            name,
            age,
            gameId: selectedGame
        }

        console.log(payload)

        axios.post(`${BASE_URL}/records`, payload)
            .then(() => {
                alert('Dados salvos com sucesso')
                setName('')
                setAge('')
                setSelectedGame('')
                setPlatform(undefined)
            })
            .catch(() => alert('Erro ao cadastrar os dados'))
        console.log({name, age, selectedGame});
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/games`)
            .then(response => {
                const selectValue = mapSelectValues(response.data);
                setAllGames(selectValue)
            })
            .catch(() => alert('Erro ao listar os jogos'))
    }, [])

    return (
        <div className="page-container">
            <Filters links={links} linksText={linksText} />
            <div className="create-text">
                <h1 className="create-text-title">
                    Cadastre um novo jogo!
                </h1>
                <input
                    className="create-text-input"
                    type="text"
                    name="name"
                    placeholder="Nome"
                    onChange={text => setName(text.target.value)}
                />
                <input
                    className="create-text-input"
                    type="number"
                    name="age"
                    placeholder="Idade"
                    max={200}
                    onChange={text => setAge(text.target.value)}
                />
                <div className="create-button">
                    <PlatformCard platform="PC" onChange={handleChangePlatform} activePlatform={platform} />
                    <PlatformCard platform="XBOX" onChange={handleChangePlatform} activePlatform={platform} />
                    <PlatformCard platform="PLAYSTATION" onChange={handleChangePlatform} activePlatform={platform} />
                </div>

                <select className="create-select" onChange={handleChange} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>Selecione o Game</option>
                    {filteredGames.map(game => (
                        <option key={game.id} value={game.value}>{game.label}</option>
                    ))}
                </select>
                <button className="create-submit" onClick={handleSubmit}>SALVAR</button>
            </div>
        </div>
    )
}

export default CreateRecord;