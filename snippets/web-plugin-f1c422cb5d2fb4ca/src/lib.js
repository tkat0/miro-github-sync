export async function getClientId() {
    return await miro.getClientId()
}

export async function getBoardSelection() {
    return await miro.board.selection.get()
}

export function showNotification(input) {
    miro.showNotification(input)
}

export async function getToken() {
    return await miro.getToken()
}

export async function updateWidget(input) {
    console.log(input)
    const icon = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"

    await miro.board.widgets.update(input.widgets.map(card => ({
        "id": card.id,
        "card": {
            "logo": {
                "iconUrl": icon
            },
            "customFields": [
                {
                    "iconUrl": icon,
                    "tooltip":  card.metadata.repository,
                    "value": "#???"
                }
            ],
            "description": card.description + "<p>miro synced</p>>"
        }
    })))

    /*
    TODO can not update metadata
    await miro.board.widgets.update(input.widgets.map(card => ({
        "id": card.id,
        "metadata": {
            [input.client_id]: card.metadata,
        },
    })))
    */
}
