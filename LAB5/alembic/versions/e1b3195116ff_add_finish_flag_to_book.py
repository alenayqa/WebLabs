"""Add finish flag to book

Revision ID: e1b3195116ff
Revises: 62514794cd35
Create Date: 2022-11-21 11:34:43.338227

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e1b3195116ff'
down_revision = '62514794cd35'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('plan_book')
    op.drop_table('finished_book')
    op.add_column('book', sa.Column('is_finished', sa.Boolean(), nullable=False))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('book', 'is_finished')
    op.create_table('finished_book',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.PrimaryKeyConstraint('id', name='finished_book_pkey')
    )
    op.create_table('plan_book',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.PrimaryKeyConstraint('id', name='plan_book_pkey')
    )
    # ### end Alembic commands ###