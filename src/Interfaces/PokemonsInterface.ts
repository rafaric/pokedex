export interface PokemonInfo {
  name: string;
  id: number;
  types: [{ type: { name: string } }];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  order: number;
  stats: [{ base_stat: number; stat: { name: string } }];
  weight: number;
  height: number;
  abilities: [{ ability: { name: string } }];
  moves: [{ move: { name: string } }];
  base_experience: number;
  species: { name: string };
  location_area_encounters: string;
  is_default: boolean;
  forms: [{ name: string }];
  held_items: [{ item: { name: string } }];
  game_indices: [{ game_index: number }];
  egg_groups: [{ name: string }];
  evolution_chain: { url: string };
  evolution_details: [{ min_level: number }];
  gender_rate: number;
  capture_rate: number;
}
