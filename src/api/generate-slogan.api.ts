import { GenerateSloganDto } from './dto/generate-slogan.dto';
import { SloganResponseDto } from './dto/slogan-response.dto';

export class GenerateSloganApi {
  readonly BASE_URL = process.env.REACT_APP_BASE_URL;
  readonly SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

  async generateSlogan(description: string) {
    const response = await fetch(
      `${this.BASE_URL}:${this.SERVER_PORT}/slogan-generator/generate`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
      }
    );
    const json = (await response.json()) as SloganResponseDto;
    return json;
  }
}
