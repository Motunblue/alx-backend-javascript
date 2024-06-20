class AppController {
  static getHomepage(request, response) {
    response.statusCode = 200;
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
