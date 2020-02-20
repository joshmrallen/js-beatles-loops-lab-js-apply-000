// add solution here

function theBeatlesPlay(musicians, instruments) {
    
    var roles = [];

    for(var i=0; i<musicians.length; i++) {
        
        roles[i] = musicians[i] + " plays " + instruments[i];

    }//end for loop

    return roles;


}