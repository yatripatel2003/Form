const weather = () => {
    const [weather, setweather] = useState(null);

    return (
        <div>
            <input type="text"
                placeholder="enter your city"
                value={weather}
                onChange={(e) => {
                    setweather(e.target.value)
                }}

            />
        </div>
    )
}

export default weather