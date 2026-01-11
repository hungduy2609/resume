/**
 * Snow Effect Controller
 * Creates animated falling snowflakes
 */

class SnowController {
    constructor() {
        this.snowflakes = [];
        this.canvas = null;
        this.ctx = null;
        this.animationId = null;
        this.heroSection = null;
        this.isActive = false;
        this.init();
    }

    init() {
        // Wait for hero section to be available
        const setupSnow = () => {
            this.heroSection = document.querySelector('#home, .hero');
            if (!this.heroSection) {
                setTimeout(setupSnow, 100);
                return;
            }

            // Create canvas element
            this.canvas = document.createElement('canvas');
            this.canvas.id = 'snow-canvas';
            this.canvas.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 1;
            `;
            this.heroSection.style.position = 'relative';
            this.heroSection.appendChild(this.canvas);

            this.ctx = this.canvas.getContext('2d');
            this.resize();
            this.createSnowflakes();

            // Handle window resize
            window.addEventListener('resize', () => this.resize());

            // Check localStorage for saved state
            const savedState = localStorage.getItem('snowEffect');
            this.isActive = savedState !== 'false'; // Default to true if not set

            // Start animation if active
            if (this.isActive) {
                this.start();
            } else {
                this.canvas.style.display = 'none';
            }
        };

        setupSnow();
    }

    resize() {
        if (!this.heroSection || !this.canvas) return;

        const rect = this.heroSection.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;

        // Recreate snowflakes if canvas size changed significantly
        if (this.snowflakes.length === 0 || Math.abs(this.canvas.width - (this.snowflakes[0].maxWidth || 0)) > 100) {
            this.snowflakes = [];
            this.createSnowflakes();
        }
    }

    createSnowflakes() {
        if (!this.canvas) return;

        const count = Math.floor((this.canvas.width * this.canvas.height) / 15000);

        for (let i = 0; i < count; i++) {
            this.snowflakes.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 3 + 1,
                speed: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
                wind: Math.random() * 0.5 - 0.25,
                maxWidth: this.canvas.width,
            });
        }
    }

    animate() {
        if (!this.isActive || !this.canvas || !this.ctx) return;

        // Update canvas size if hero section size changed
        if (this.heroSection) {
            const rect = this.heroSection.getBoundingClientRect();
            if (this.canvas.width !== rect.width || this.canvas.height !== rect.height) {
                this.resize();
            }
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.snowflakes.forEach((flake, index) => {
            // Update position
            flake.y += flake.speed;
            flake.x += flake.wind + Math.sin(flake.y * 0.01) * 0.5;

            // Reset if off screen (only reset if below hero section)
            if (flake.y > this.canvas.height) {
                flake.y = -10;
                flake.x = Math.random() * this.canvas.width;
            }

            // Wrap around horizontally within hero section
            if (flake.x > this.canvas.width) {
                flake.x = 0;
            } else if (flake.x < 0) {
                flake.x = this.canvas.width;
            }

            // Only draw if within canvas bounds
            if (flake.x >= 0 && flake.x <= this.canvas.width && flake.y >= 0 && flake.y <= this.canvas.height) {
                // Draw snowflake
                this.ctx.beginPath();
                this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
                this.ctx.fill();
            }
        });

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    start() {
        if (!this.isActive && this.canvas) {
            this.isActive = true;
            this.canvas.style.display = 'block';
            localStorage.setItem('snowEffect', 'true');
            this.animate();
        }
    }

    stop() {
        if (this.isActive) {
            this.isActive = false;
            if (this.canvas) {
                this.canvas.style.display = 'none';
            }
            localStorage.setItem('snowEffect', 'false');
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
                this.animationId = null;
            }
        }
    }

    toggle() {
        if (this.isActive) {
            this.stop();
        } else {
            this.start();
        }
        return this.isActive;
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

// Initialize snow effect when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.snowController = new SnowController();
    });
} else {
    window.snowController = new SnowController();
}
