export function courtTransformer (court)  {
    return {
        id: court.id,
        name: court.name,
        type: court.type,
        createdAt: court.createdAt,
        updatedAt: court.updatedAt
    }
}