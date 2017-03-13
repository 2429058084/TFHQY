$(()=>{
    $.ajax({
        url:'/getUser',
        dateType:'json',
        cache:false,
        success(r){
            if(!r.err){
               $.each(r.data, (i,v)=>{
                $(`<li class="fl"><a href="javascript:;">${v.a}</a></li>`).appendTo('.top-nav')
                }) ;
            }
            
        }
    });
    $.ajax({
        url:'/User',
        dateType:'json',
        cache:false,
        success(r){
            if(!r.err){
                $.each(r.data[0],(i,v)=>{
                    $(`<a class="a-first" href="javascript:;">${v}</a>`).appendTo('.l1')
                });
                $.each(r.data[1],(i,v)=>{
                    $(`<a class="a-first" href="javascript:;">${v}</a>`).appendTo('.l2')
                });
                $.each(r.data[2],(i,v)=>{
                    $(`<a class="a-first" href="javascript:;">${v}</a>`).appendTo('.l3')
                });
            }
        }
    });
    $.ajax({
        url:'/inner',
        dateType:'json',
        cache:false,
        success(r){
            $.each(r,(i,v)=>{
                $(`<li><a href="javascript:;">${v.name}</a></li>`).appendTo('.baaner-r-list');
            });
        },
        error:r=>{
            alert(h)

        }
    });
    $.ajax({
        url:'/text',
        dateType:'json',
        cache:false,
        success(r){
            $.each(r,(i,v)=>{
                $(`<li class="fl"><a href="javascript:;">${v.name}</a></li>`).appendTo('.che-t');
            });
        },
        error:r=>{
            alert(h)

        }
    });
    $.ajax({
        url:'/index',
        dateType:'json',
        cache:false,
        success(r){
            console.log(r)
            $.each(r,(i,v)=>{
                $(`<h3>${v.name}</h3><p>${v.value}</p>`).appendTo('.test-s-1');
            });
        },
        error:r=>{
            alert(h)

        }
    });
});