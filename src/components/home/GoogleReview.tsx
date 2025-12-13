import { ExternalLink } from "lucide-react";
export function GoogleReview() {
  return <section className="py-16 bg-background">
      <div className="container-tight">
        <div className="text-center mb-10">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Kundenbewertung
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Das sagen unsere Kunden
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <a href="https://www.google.com/maps/place/Sch%C3%B6che+Alarm-+und+Sicherheitstechnik/@50.2911111,12.2516667,17z/data=!4m8!3m7!1s0x47a0f1234567890:0x1234567890abcdef!8m2!3d50.2911111!4d12.2516667!9m1!1b1!16s%2Fg%2F1234567890" target="_blank" rel="noopener noreferrer" className="block bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-medium transition-all duration-300 group">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <span className="text-accent font-bold text-lg">MS</span>
              </div>
              
              <div className="flex-1">
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">Michael Schörner</h3>
                    <p className="text-sm text-muted-foreground">Local Guide · 481 Rezensionen</p>
                  </div>
                  <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6 w-auto opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Stars - 4 out of 5 */}
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4].map(star => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-muted-foreground/30 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-muted-foreground ml-2">vor 6 Jahren</span>
                </div>
                
                {/* Review Text */}
                <p className="text-foreground text-lg">
                  „Gute Beratung und professionelle Installation. Zuverlässiger Service."
                </p>
                
                {/* Link hint */}
                <div className="flex items-center gap-2 mt-4 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                  <span>Auf Google Maps ansehen</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>;
}