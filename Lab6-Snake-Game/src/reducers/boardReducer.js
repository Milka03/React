const N = 12;

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = null)
{
    return {
        Width: N,
        Height: N,
        TileColor: "white",
        Timer: 150
    }
}