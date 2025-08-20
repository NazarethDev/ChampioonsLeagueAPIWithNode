import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";


const dataBase: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Foward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
        }
    }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return dataBase;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return dataBase.find(player => player.id === id)
};

export const insertPlayer = async (player: PlayerModel) => {
    dataBase.push(player);
};

export const deleteOnePlayer = async (id: number) => {
    const index = dataBase.findIndex(p => p.id === id);

    if (index !== -1) {
        dataBase.splice(index, 1);
        return true
    }

    return false
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel) => {
    const playerIndex = dataBase.findIndex(player => player.id === id);

    if (playerIndex !== -1) {
        dataBase[playerIndex].statistics = statistics;
    }

    return dataBase[playerIndex];

}