module.exports = (app) => {

    app.get('/', function (request, response) {
        response.send(
            `
        <html>
            <body>
                Ultima School
            </body>
        </html>
        `
        );
    });

    app.get('/alunos', function (request, response) {
        response.send(
            `
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Ultima School</title>
            </head>
            <body>
                <h1>Listagem de Alunos</h1>

                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Matricula</td>
                            <td>Nome do Aluno</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>033348744</td>
                            <td>Camila Pontani</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>033348745</td>
                            <td>Julio Pontani</td>
                        </tr>
                    </tbody>
                </table>
            </body>
            </html>
            `
        );
    });

    app.get('/professores', function (request, response) {
        response.send(
            `
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Ultima School</title>
            </head>
            <body>
                <h1>Listagem de Professores Cadastrados</h1>

                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Matricula</td>
                            <td>Nome do Professor</td>
                            <td>Curso</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>154846264</td>
                            <td>Guilherme</td>
                            <td>Teste de Software</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>265653265</td>
                            <td>Rodrigo</td>
                            <td>JavaScript</td>
                        </tr>
                    </tbody>
                </table>
            </body>
            </html>
            `
        );
    });
}