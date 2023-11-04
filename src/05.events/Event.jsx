export function Event() {
    const onclick = (number) => {
        alert(`Clicked event ${number}`)
    }

    return <button onClick={() => onclick(100)}>Click me</button>
}