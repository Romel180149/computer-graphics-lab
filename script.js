
    document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('spiralCanvas');
    const ctx = canvas.getContext('2d');
    let radius = 5;
    let total_length = 100;
  
    function drawSpiral() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        let angle = 0;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        
        
        for (let i = 0; i < total_length; i++) {
            const x = centerX + (radius * angle) * Math.cos(angle);
            const y = centerY + (radius * angle) * Math.sin(angle);
            
            ctx.lineTo(x, y);
            angle += 0.1;
        }
        ctx.setLineDash([5,10]);
        ctx.strokeStyle = '#ff4760';
        ctx.stroke();
        radius += 0; // Increase the radius with each click
        total_length += 50
    }
  
    canvas.addEventListener('click', function() {
      drawSpiral();
    });
  
    drawSpiral(); // Initial drawing
  });

  
  