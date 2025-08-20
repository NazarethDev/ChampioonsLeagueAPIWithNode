import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";


const dataBase: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
        }
    },
    {
        id: 2,
        name: "Kylian Mbappé",
        club: "Real Madrid",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 97,
            Shooting: 89,
            Passing: 80,
            Dribbling: 92,
            Defending: 36,
            Physical: 77
        }
    },
    {
        id: 3,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Norway",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 89,
            Shooting: 94,
            Passing: 65,
            Dribbling: 80,
            Defending: 45,
            Physical: 88
        }
    },
    {
        id: 4,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 74,
            Shooting: 86,
            Passing: 94,
            Dribbling: 87,
            Defending: 64,
            Physical: 78
        }
    },
    {
        id: 5,
        name: "Jude Bellingham",
        club: "Real Madrid",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 82,
            Shooting: 82,
            Passing: 84,
            Dribbling: 87,
            Defending: 78,
            Physical: 84
        }
    },
    {
        id: 6,
        name: "Robert Lewandowski",
        club: "Barcelona",
        nationality: "Poland",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 77,
            Shooting: 92,
            Passing: 78,
            Dribbling: 85,
            Defending: 43,
            Physical: 82
        }
    },
    {
        id: 7,
        name: "Vinícius Júnior",
        club: "Real Madrid",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 95,
            Shooting: 82,
            Passing: 78,
            Dribbling: 92,
            Defending: 30,
            Physical: 70
        }
    },
    {
        id: 8,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 92,
            Shooting: 87,
            Passing: 81,
            Dribbling: 89,
            Defending: 45,
            Physical: 75
        }
    },
    {
        id: 9,
        name: "Harry Kane",
        club: "Bayern Munich",
        nationality: "England",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 73,
            Shooting: 93,
            Passing: 83,
            Dribbling: 84,
            Defending: 45,
            Physical: 82
        }
    },
    {
        id: 10,
        name: "Lautaro Martínez",
        club: "Inter Milan",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 87,
            Pace: 85,
            Shooting: 86,
            Passing: 74,
            Dribbling: 86,
            Defending: 48,
            Physical: 82
        }
    },
    {
        id: 11,
        name: "Antoine Griezmann",
        club: "Atlético de Madrid",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 86,
            Pace: 77,
            Shooting: 84,
            Passing: 85,
            Dribbling: 87,
            Defending: 58,
            Physical: 74
        }
    },
    {
        id: 12,
        name: "Bernardo Silva",
        club: "Manchester City",
        nationality: "Portugal",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 80,
            Shooting: 79,
            Passing: 85,
            Dribbling: 92,
            Defending: 60,
            Physical: 72
        }
    },
    {
        id: 13,
        name: "Rúben Dias",
        club: "Manchester City",
        nationality: "Portugal",
        position: "Defender",
        statistics: {
            Overall: 88,
            Pace: 74,
            Shooting: 45,
            Passing: 73,
            Dribbling: 70,
            Defending: 89,
            Physical: 86
        }
    },
    {
        id: 14,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Netherlands",
        position: "Defender",
        statistics: {
            Overall: 89,
            Pace: 72,
            Shooting: 60,
            Passing: 72,
            Dribbling: 70,
            Defending: 90,
            Physical: 86
        }
    },
    {
        id: 15,
        name: "Alisson Becker",
        club: "Liverpool",
        nationality: "Brazil",
        position: "Goalkeeper",
        statistics: {
            Overall: 89,
            Pace: 0,
            Shooting: 0,
            Passing: 85,
            Dribbling: 0,
            Defending: 0,
            Physical: 0
        }
    },
    {
        id: 16,
        name: "Marc-André ter Stegen",
        club: "Barcelona",
        nationality: "Germany",
        position: "Goalkeeper",
        statistics: {
            Overall: 89,
            Pace: 0,
            Shooting: 0,
            Passing: 85,
            Dribbling: 0,
            Defending: 0,
            Physical: 0
        }
    },
    {
        id: 17,
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 74,
            Shooting: 74,
            Passing: 88,
            Dribbling: 84,
            Defending: 81,
            Physical: 78
        }
    },
    {
        id: 18,
        name: "Jamal Musiala",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            Overall: 87,
            Pace: 88,
            Shooting: 80,
            Passing: 82,
            Dribbling: 91,
            Defending: 60,
            Physical: 72
        }
    },
    {
        id: 19,
        name: "Federico Valverde",
        club: "Real Madrid",
        nationality: "Uruguay",
        position: "Midfielder",
        statistics: {
            Overall: 87,
            Pace: 87,
            Shooting: 82,
            Passing: 84,
            Dribbling: 82,
            Defending: 77,
            Physical: 86
        }
    },
    {
        id: 20,
        name: "Rodri",
        club: "Manchester City",
        nationality: "Spain",
        position: "Midfielder",
        statistics: {
            Overall: 90,
            Pace: 70,
            Shooting: 80,
            Passing: 86,
            Dribbling: 80,
            Defending: 84,
            Physical: 84
        }
    },
    {
        id: 21,
        name: "Pedri",
        club: "Barcelona",
        nationality: "Spain",
        position: "Midfielder",
        statistics: {
            Overall: 86,
            Pace: 80,
            Shooting: 74,
            Passing: 87,
            Dribbling: 89,
            Defending: 65,
            Physical: 70
        }
    },
    {
        id: 22,
        name: "Gavi",
        club: "Barcelona",
        nationality: "Spain",
        position: "Midfielder",
        statistics: {
            Overall: 85,
            Pace: 79,
            Shooting: 72,
            Passing: 84,
            Dribbling: 86,
            Defending: 67,
            Physical: 74
        }
    },
    {
        id: 23,
        name: "Ousmane Dembélé",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 86,
            Pace: 94,
            Shooting: 80,
            Passing: 79,
            Dribbling: 89,
            Defending: 35,
            Physical: 65
        }
    },
    {
        id: 24,
        name: "Achraf Hakimi",
        club: "Paris Saint-Germain",
        nationality: "Morocco",
        position: "Defender",
        statistics: {
            Overall: 85,
            Pace: 92,
            Shooting: 75,
            Passing: 80,
            Dribbling: 82,
            Defending: 78,
            Physical: 80
        }
    },
    {
        id: 25,
        name: "Marquinhos",
        club: "Paris Saint-Germain",
        nationality: "Brazil",
        position: "Defender",
        statistics: {
            Overall: 87,
            Pace: 75,
            Shooting: 55,
            Passing: 78,
            Dribbling: 72,
            Defending: 88,
            Physical: 82
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