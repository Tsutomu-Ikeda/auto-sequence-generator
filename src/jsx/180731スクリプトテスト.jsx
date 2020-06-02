#include json2.jsxinc
var l = app.project.activeSequence.videoTracks[1].clips[0].components[2];
// alert(l.displayName);
/*
for(var i = 0; i < l.properties.numItems; i++){
    alert(l.properties[i].displayName + ":" + l.properties[i].getValue());
}*/

var fObj = File.saveDialog("保存名");
if(fObj){
    fObj.open("w"); 
    fObj.encoding = "utf-8";
    var methodRef = l.reflect.methods;
    var propRef = l.reflect.properties;

    fObj.write(l.name + "\r\n");
    fObj.write(methodRef + "\r\n");
    fObj.write(propRef+ "\r\n");
     
    for(var i = 0; i < l.properties.numItems; i++){
        fObj.write(l.properties[i].displayName + ":" + l.properties[i].getValue() + "\r\n");
    }
    fObj.close();
    }

//l.properties[0].setValue("あいうえお",1 );
/*
alert(l.properties[0].displayName + ":" + l.properties[0].getValue());
var source =  l.properties[0];
var methodRef = source.reflect.methods;
var propRef = source.reflect.properties;
alert(methodRef);
alert(propRef);
/*

var methodRef = l.reflect.methods;
var propRef = l.reflect.properties;

alert(methodRef);
alert(propRef);

for (var i = 0; i < comp.components.numItems; i++){
*/