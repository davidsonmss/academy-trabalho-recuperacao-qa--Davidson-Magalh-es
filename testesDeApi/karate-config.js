function setup() {
    var config = {
        baseUrl: "https://rarotube-api.herokuapp.com/"
    }
    karate.configure("logPrettyRequest", true);
    karate.configure("logPrettyResponse", true);
    return config;
}
