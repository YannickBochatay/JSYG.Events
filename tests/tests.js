if (typeof require!= "undefined") {
    
    require.config({
        paths: {
            "jsyg-events": '../JSYG.Events',
            "jquery":"../bower_components/jquery/dist/jquery",
            "jsyg-wrapper":"../bower_components/jsyg-wrapper/JSYG-wrapper"
        },
        urlArgs: "bust=" + (+new Date())
    });
}

(function(factory) {
    
    if (typeof define == 'function' && define.amd) define(["jsyg-events"],factory);
    else factory(Events);
    
}(function(Events) {

    module("Events");

    test("Manipulation des événements", function() {     
        
        var cpt = 0;
        
        var events = new Events();
        
        function incremente() { cpt++; }
        
        events.ontest = null;
        
        expect(3);
        
        events.on("test",incremente);
        events.trigger("test");
        equal(cpt,1,"Déclenchement de l'événement");
        
        events.on("test",incremente);
        events.trigger("test");
        equal(cpt,2,"Non prise en compte des doublons");
        
        events.off("test",incremente);
        events.trigger("test");
        equal(cpt,2,"Suppression d'un événement");
        
    });
    
}));
