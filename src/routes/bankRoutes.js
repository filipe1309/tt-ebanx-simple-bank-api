const routes = (app) => {
    app.route('/reset')
        .post((req, res) =>
            res.send('POST request successful')
        )

    app.route('/balance')
        .get((req, res) =>
            res.send('GET request successful')
        )

    app.route('/event')
        .post((req, res) =>
            res.send('POST request successful')
        )
}

export default routes;