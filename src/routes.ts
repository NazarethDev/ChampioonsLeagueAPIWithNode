import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";
import * as ClubsConstroller from "../src/controllers/clubs-controller"

const router = Router()

router.get("/players", PlayerController.getPlayers);

router.get("/players/:id", PlayerController.getPlayerById);

router.post("/players", PlayerController.postPlayer);

router.delete("/players/:id", PlayerController.deletePlayer);

router.patch("/players/:id", PlayerController.updatePlayer);


router.get("/clubs", ClubsConstroller.getClubs)

export default router