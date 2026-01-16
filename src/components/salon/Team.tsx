import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Award, Users } from "lucide-react";

const team = [
  {
    name: "Mike Rodriguez",
    role: "Master Barber",
    experience: "15+ years",
    specialty: "Classic cuts & fades",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Chen",
    role: "Senior Stylist",
    experience: "10+ years",
    specialty: "Women's styling & color",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "James Wilson",
    role: "Barber & Stylist",
    experience: "8+ years",
    specialty: "Modern styles & beards",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Martinez",
    role: "Kids' Specialist",
    experience: "6+ years",
    specialty: "Children's haircuts",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

const stats = [
  {
    icon: Scissors,
    value: "10,000+",
    label: "Haircuts",
  },
  {
    icon: Users,
    value: "5,000+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="py-20 md:py-32 bg-secondary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-widest uppercase mb-4">
            Our Team
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Meet Our <span className="text-gradient-gold">Experts</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Skilled professionals dedicated to making you look and feel your
            best.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 bg-background rounded-lg shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1 ${
                index === 2 ? "hidden md:block" : ""
              }`}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <p className="text-3xl md:text-4xl font-display font-bold text-gold mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <Card
              key={member.name}
              className={`group bg-background border-border hover:border-gold transition-all duration-300 hover:-translate-y-2 hover:shadow-premium-lg overflow-hidden ${
                index >= 2 ? "hidden lg:block" : ""
              }`}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-1">
                    {member.experience}
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    {member.specialty}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
