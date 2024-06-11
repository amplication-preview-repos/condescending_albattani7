/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Claimant as PrismaClaimant } from "@prisma/client";

export class ClaimantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ClaimantCountArgs, "select">): Promise<number> {
    return this.prisma.claimant.count(args);
  }

  async claimants<T extends Prisma.ClaimantFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClaimantFindManyArgs>
  ): Promise<PrismaClaimant[]> {
    return this.prisma.claimant.findMany<Prisma.ClaimantFindManyArgs>(args);
  }
  async claimant<T extends Prisma.ClaimantFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClaimantFindUniqueArgs>
  ): Promise<PrismaClaimant | null> {
    return this.prisma.claimant.findUnique(args);
  }
  async createClaimant<T extends Prisma.ClaimantCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClaimantCreateArgs>
  ): Promise<PrismaClaimant> {
    return this.prisma.claimant.create<T>(args);
  }
  async updateClaimant<T extends Prisma.ClaimantUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClaimantUpdateArgs>
  ): Promise<PrismaClaimant> {
    return this.prisma.claimant.update<T>(args);
  }
  async deleteClaimant<T extends Prisma.ClaimantDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ClaimantDeleteArgs>
  ): Promise<PrismaClaimant> {
    return this.prisma.claimant.delete(args);
  }
}
