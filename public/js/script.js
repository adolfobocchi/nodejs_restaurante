


$(document).ready(function(){ 

   
    function fetchGetDelete(id) {
        var mensagem = $('#mensagem');
        $.ajax({
            url: '/painel/delete',
            type: 'get', //get
            //data: form_cadastro.serialize(),
            data: 'id='+id,
            
            beforeSend: function (xhr) {
                mensagem.html('Excluindo prato!');
            },
            success:function (data) {
                location.reload();
                mensagem.html(data);

            }
        })
    }


    $('tbody').on('click', '.btn-editar', function (event) {
        event.preventDefault();
        var id = $(this).attr('data-id');
        

        $('#id').val(id);
        $('#nome').val( $(event.currentTarget).closest('tr').find('.nome').html());
        $('#ingredientes').val( $(event.currentTarget).closest('tr').find('.ingredientes').html());
        $('#rendimento').val( $(event.currentTarget).closest('tr').find('.rendimento span').html());
        $('#categoria').val( $(event.currentTarget).closest('tr').find('.categoria span').html());

        $("#tabela tr:has(td)").each(function () {
            console.log($(this).hasClass( "table-item--selected" ))
            if($(this).hasClass( "table-item--selected" ))
            {
                $(this).toggleClass('table-item--selected')
            }
        });

        $(event.currentTarget).closest('tr').toggleClass('table-item--selected')
    
    });


    $('tbody').on('click', '.btn-excluir', function (event) {
        event.preventDefault();
        if (confirm('Tem certeza que deseja excluir um prato?')) {
            var id = $(this).attr('data-id');
            fetchGetDelete(id);
        }
        
    });

   
});


