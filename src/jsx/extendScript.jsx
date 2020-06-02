#include "json2.js"
$.runScript = {

	genSeqsfromCsv: function() {
        createSequences(text1, serial);
    }	
}

function createSequences(str, serial){
    var csvFile = str;

    if(csvFile){
        var csvfObj = File(csvFile);
        csvfObj.open("r");
        var fullText = csvfObj.read();
        csvfObj.close();

        newSeqArray = fullText.split("\n");
        newSeqArray.shift();
        newSeqArray.pop();
        for(var i = 0; i < newSeqArray.length; i++){
            newSeqArray[i] = newSeqArray[i].split(",");
        }
    }


    app.enableQE();
    var prev_cate1 = "";
    var prev_cate2 = "";
    var seq_name = "";
    var seq_preset_path = "";
    var seq_counter = 0;
    var cate1_counter = serial - 1;
    var cate2_counter = 0;
    var cate1Bin, cate2Bin;
    for(var i = 0; i < newSeqArray.length; i++){
        if (newSeqArray[i][0]!=prev_cate1){
            cate1_counter++;
            var cate1BinName =  ( '00' + cate1_counter ).slice( -2 ) + "_" + newSeqArray[i][0];
            cate1Bin = app.project.rootItem.createBin(cate1BinName);
            
            seq_counter = 0;
            
            cate2_counter = 0;
            prev_cate2 = "";
        }
        prev_cate1 = newSeqArray[i][0];
        
        if (newSeqArray[i][1]!=prev_cate2){
            cate2_counter++;
            var cate2BinName =   ( '00' + cate2_counter ).slice( -2 ) + "_" + newSeqArray[i][1];
            cate2Bin = app.project.rootItem.createBin(cate2BinName);
            cate2Bin.moveBin(cate1Bin);
            
            seq_counter = 0;
        }
        prev_cate2 = newSeqArray[i][1];
        
        seq_counter++;
        
        seq_name = ( '00' + seq_counter ).slice( -2 ).toString() + "_" + newSeqArray[i][2];
        seq_preset_path = newSeqArray[i][3];
        qe.project.newSequence(seq_name, seq_preset_path);
        app.project.activeSequence.projectItem.moveBin(cate2Bin);
    }
}

var cCounter = function(str,seq){
    return str.split(seq).length - 1;
}