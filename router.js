window.onload = function(){
    
    var Router = function(name, routes){
        return {
            name: name,
            routes: routes
        }
    };

    var myRouter = new Router("myRouter", [
        {
            path: "/",
            name: "root"
        },
        {
            path: "/about",
            name: "About"
        },
        {
            path: "/contact",
            name: "Contact"
        },
        {
            path: "/index.html",
            name: "inicio"
        }
    ]);
    
    var currentPath = window.location.pathname;
    console.log(currentPath)
    if(currentPath === "/"){
        console.log("Root")
    }else{
        var route = myRouter.routes.filter(function(r){
            return r.path === currentPath;
        })[0];
        console.log(route)
    }


}