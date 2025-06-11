import {formatDate} from "../helpers/formatDate.js";

export function reservationTransformer(reservation) {
    return {
        id: reservation.id,
        date: formatDate(reservation.date),
        time: reservation.time,
        userId: reservation.userId,
        courtId: reservation.courtId,
        createdAt: reservation.createdAt,
        updatedAt: reservation.updatedAt
    }
}