
function append(){
    $('#win').window('open'); // open a window
}
function removeit(){
    var node = $('#tt').tree('getSelected');
    $('#tt').tree('remove', node.target);
}
function edit(){
    var node = $('#tt').tree('getSelected');
    $('#tt').tree('expand',node.target);
}
function addTab(title, url){
    if ($('#xx').tabs('exists', title)){
        $('#xx').tabs('select', title);
    } else {
        var content = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>';
        $('#xx').tabs('add',{
            title:title,
            content:content,
            closable:true
        });
    }
}

function asd() {
    alert('xxxx');
}