import * as fs from 'fs';
import * as path from 'path';

export class DataLoader {
  static loadTestData() {
    const env = process.env.ENV || 'qa';
    const dataFilePath = path.resolve(__dirname, `../test-data/${env}/google.json`);

    // Log the path for troubleshooting
    console.log(`Looking for test data file at path: ${dataFilePath}`);

    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, 'utf-8');
      try {
        return JSON.parse(data);
      } catch (err) {
        throw new Error(`Failed to parse test data: ${err}`);
      }
    } else {
      throw new Error(`Test data file not found for environment: ${env}`);
    }
  }
}
